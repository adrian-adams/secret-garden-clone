/**
 * Submit form data to a Google Sheet via Google Apps Script
 * @param {string} googleSheetsUrl - The Apps Script URL
 * @param {object} data - Key/value pairs of form fields
 * @returns {Promise<{ success: boolean }>}
 */

export default async function submitToGoogleSheets(googleSheetsURL, userData) {
    
    try {

        if(!googleSheetsURL) throw new Error("Google Sheets URL is required");
        if(!userData || typeof userData !== 'object') throw new Error("User data is required");

        const formData = new URLSearchParams();
        for (const key in userData) {
            if(userData[key] !== undefined && userData[key] !==){
                formData.append(key, userData[key]);
            }
        }

        const response = await fetch(googleSheetsURL, {
            method: "POST",
            body: formData,
        });

        if(!response.ok) {
            throw new Error("Failed to submit to Google Sheets");
        }

    } catch (error) {
        console.error("Submit error:", error);
    }
}

    
