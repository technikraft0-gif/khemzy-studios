export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validateBookingForm(data: {
  fullName?: string;
  email?: string;
  phone?: string;
  serviceType?: string;
  details?: string;
}): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = "Please enter your full name.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  const phoneRegex = /^[\d\s+\-()]{7,20}$/;
  if (!data.phone || !phoneRegex.test(data.phone.trim())) {
    errors.phone = "Please enter a valid phone or WhatsApp number.";
  }

  if (!data.serviceType || data.serviceType.trim() === "") {
    errors.serviceType = "Please select a service or session category.";
  }

  if (!data.details || data.details.trim().length < 10) {
    errors.details = "Please share a brief description (at least 10 characters) about your vision.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
