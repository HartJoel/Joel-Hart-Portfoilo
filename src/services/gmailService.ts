// services/gmailService.ts
import gmailSend from "gmail-send";

const sendMail = gmailSend({
  user: process.env.GMAIL_USER,  // your gmail
  pass: process.env.GMAIL_PASS,  // your App password
  to: process.env.GMAIL_USER,    // where you want to receive messages
});

export const gmailService = {
  sendContact: async (data: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }) => {
    try {
      await sendMail({
        subject: `[Portfolio Contact] ${data.subject}`,
        text: `From: ${data.name} (${data.email})\n\n${data.message}`,
      });
      return { success: true };
    } catch (err: unknown) {
      let errorMessage = "An unknown error occurred";
      if (err instanceof Error) {
        errorMessage = err.message;
      }
      return { success: false, error: errorMessage };
    }
  },
};
