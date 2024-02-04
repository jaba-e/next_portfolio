export const message = {
  analytics: {
    success: "Success.",
    exception:
      "Google analytics ID is not defined or the node environment is not production.",
  },
  email: {
    validation: {
      from: {
        invalid_type_error: "Email input type is invalid.",
        not_mail_error: "Your email is invalid.",
        max_exceed_error: "Email cannot exceed 255 characters",
      },
      subject: {
        invalid_type_error: "Subject input type is invalid.",
        max_exceed_error: "Details cannot exceed 100 characters",
      },
      details: {
        invalid_type_error: "Details input type is invalid.",
        max_exceed_error: "Details cannot exceed 500 characters",
      },
    },
    success:
      "Your message has been successfully submitted. I'll get back to you as soon as possible. Thank you.",
    error: {
      transporter_keys_not_found:
        "TRANSPORTER user name or password did not found.",
      transporter_send_error: "An error occurred when sending contact email",
      exception: "Oops! Something went wrong. I've been working to fix it.",
    },
  },
} as const;
