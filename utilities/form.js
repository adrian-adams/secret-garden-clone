/**
 * Submit form userData to a Google Sheet via Google Apps Script
 * @param {string} googleSheetsUrl - The Apps Script URL
 * @param {object} formData - Key/value pairs of form fields
 * @returns {Promise<{ success: boolean }>}
 */
 
export async function submitToGoogleSheets(googleSheetsUrl, formData) {

  try {

    if(!googleSheetsUrl) {
      console.log("Google Sheets URL is missing");
      throw new Error("Google Sheets URL is missing");
    }

    const body = new URLSearchParams();

    Object.entries(formData).forEach(([key, value]) =>{
      body.append(key, value);
    });

    const response = await fetch(googleSheetsUrl, {
      method: 'POST',
      body,
    });

    if(!response.ok) {
      console.log("Google Sheets submission failed");
      throw new Error("Google Sheets submission failed");
    }

    return {sucess: true};
    
  } catch (error) {
    console.error("submitToGoogleSheets error:", error);
    console.log("Submission failed ");
    return {success: false};
  }
}
