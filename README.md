# MRCL Infrastructure

A modern, high-performance real estate web application built to showcase premium luxury villas and infrastructure projects. The application provides an elegant user interface featuring interactive property showcases, project details, dynamic forms for project enquiries, and career applications.

## Application Flow

Here is the general user flow and how the frontend communicates with the backend APIs for different services:

```mermaid
graph TD
    %% User Entry Points
    User([User visits website]) --> Home[Home Page]
    
    %% Navigation
    Home -->|Explores Properties| Projects[Projects / Properties]
    Home -->|Wants to Contact| Contact[Contact Page]
    Home -->|Looking for Jobs| Careers[Careers Page]
    
    %% Property Specifics
    Projects --> Sylvan[Sylvan Woods]
    Projects --> Unicon[Unicon Sugarland]
    Projects --> Ayanur[Ayanur Enclave]
    Projects --> Dharithri[Dharithri Greens]

    %% Forms and Data collection
    Sylvan & Unicon & Ayanur & Dharithri -->|Fills Project Enquiry| ProjForm(Project Enquiry Form)
    Contact -->|Fills General Enquiry| GenForm(General Enquiry Form)
    Careers -->|Fills Job Application| CareerForm(Career Application Form)
    
    %% API Integrations
    ProjForm -->|POST JSON Payload| API_ProjEnquiry[/api/contact/project-enquiry]
    GenForm -->|POST JSON Payload| API_GenEnquiry[/api/enquiry]
    CareerForm -->|POST FormData w/ Resume| API_Career[/api/contact/career]
    
    %% Backend
    API_ProjEnquiry & API_GenEnquiry & API_Career --> Backend[(Express Backend)]
    Backend -->|Send Success Response| UI[UI Displays Success Message]
```

### Flow Details:
1. **Routing**: The user navigates through various routes (`/`, `/contact`, `/careers`, `/sylvan-woods`, etc.) handled by `react-router-dom`.
2. **Component Rendering**: Pages render property details using static data and animate them using Framer Motion and GSAP.
3. **Form Submission**: 
   - When a user submits an enquiry on a property page, the `submitProjectEnquiryForm` utility in `src/api/index.js` is called.
   - The phone number input restricts non-digits, truncates leading zeros, and mandates 10 digits before allowing submission.
   - For Careers, a `FormData` object is created to handle the resume file upload.
4. **Backend Processing**: The Express backend (running on `localhost:8500` or `localhost:5000`) receives the POST request, processes the contact/enquiry, and returns a response to the frontend.

---

## Technologies Used

- **Framework**: React 19 with [Vite](https://vitejs.dev/)
- **Routing**: `react-router-dom` (v7)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4
- **Animations**: Framer Motion (`motion/react`) & GSAP
- **Icons**: `lucide-react`
- **Backend API Integration**: Fetch API communicating with a dedicated Express backend.

## Getting Started

1. Clone the repository:
   ```bash
   cd mrcl-infrastructure
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Set up the environment variables:
   Ensure your backend API url is configured correctly in your `.env.local` or environment config.
4. Run locally:
   ```bash
   npm run dev
   ```
