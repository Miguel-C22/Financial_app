export function extractFirstNameFromEmail(email: string | null | undefined): string {
    
    if (!email) return "";
    
    const username = email.split("@")[0];
    const cleaned = username.replace(/[^a-zA-Z]/g, " ");
    
    const firstWord = cleaned
      .split(" ")
      .filter(Boolean)[0];

    if (!firstWord) return "";

    return firstWord.charAt(0).toUpperCase() + firstWord.slice(1).toLowerCase();
}