//const API_BASE_URL = "http://localhost:8500/api";
const API_BASE_URL = "https://api.mrclinfrastructure.com/api";

export const submitContactForm = async (data) => {
  return await fetch(`${API_BASE_URL}/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const submitCareerForm = async (formData) => {
  return await fetch(`${API_BASE_URL}/contact/career`, {
    method: "POST",
    body: formData,
  });
};

export const submitEnquiryForm = async (data) => {
  return await fetch(`${API_BASE_URL}/enquiry`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const submitProjectEnquiryForm = async (data) => {
  return await fetch(`${API_BASE_URL}/contact/project-enquiry`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
