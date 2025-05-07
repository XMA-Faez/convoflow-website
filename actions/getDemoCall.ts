// actions/getDemoCall.ts
"use server";

import { cookies } from "next/headers";

type IndustryType = "real-estate" | "healthcare" | "recruitment" | string;

interface DemoCallResult {
  success: boolean;
  error?: string;
}

// This is a server action, a Next.js 15 feature that allows you to
// run server-side code directly from components
export async function getDemoCall(
  phoneNumber: string,
  industry?: IndustryType
): Promise<DemoCallResult> {
  // Validate phone number format for UAE
  const uaePhoneRegex = /^(\+971|00971|0)?(?:[567]\d{8}|5[0-9]{7})$/;
  if (!uaePhoneRegex.test(phoneNumber.replace(/[\s-]/g, ""))) {
    return {
      success: false,
      error: "Please enter a valid UAE phone number",
    };
  }

  try {
    // Check if user already requested a demo call recently
    const cookieStore = cookies();
    const lastDemoCall = cookieStore.get("lastDemoCall")?.value;

    if (lastDemoCall) {
      const lastCallTime = new Date(lastDemoCall).getTime();
      const currentTime = Date.now();

      // Limit to one demo call per hour (3600000ms)
      if (currentTime - lastCallTime < 3600000) {
        return {
          success: false,
          error: "You can only request one demo call per hour",
        };
      }
    }

    // In a real implementation, you would make an API call to your calling system
    // Example with fetch:
    /*
    const response = await fetch('https://api.convoflow.ae/demo-call', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        phoneNumber,
        industry, // Include the industry parameter
        callType: 'demo',
        callScript: industry ? `${industry}-intro` : 'introduction' // Use industry-specific script
      }),
    });

    const data = await response.json();
    
    if (!data.success) {
      return {
        success: false,
        error: data.message || "Failed to initiate call"
      };
    }
    */

    // For demonstration purposes, we'll simulate an API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Log industry selection (would be sent to API in production)
    if (industry) {
      console.log(`Demo call for industry: ${industry}`);
    }

    // Set cookie to prevent abuse
    cookieStore.set("lastDemoCall", new Date().toISOString(), {
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
      path: "/",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });

    return {
      success: true,
    };
  } catch (error) {
    console.error("Error initiating demo call:", error);
    return {
      success: false,
      error: "Service temporarily unavailable. Please try again later.",
    };
  }
}
