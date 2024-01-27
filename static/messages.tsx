export const errorMessage = {
  analytics: {
    exception:
      "Google analytics ID is not defined or the node environment is not production.",
  },
  email: {
    exception: "Oops! Something went wrong. I've been working to fix it.",
  },
} as const;

export const successMessage = {
  analytics: {
    success: "Success.",
  },
  email: {
    success:
      "Your message has been successfully submitted. I'll get back to you as soon as possible. Thank you.",
  },
} as const;
