# World Leaders Wiki – Frontend

Frontend application for **World Leaders Wiki**, a platform that centralizes structured information about political, social, and historical leaders around the world.

This project is designed with scalability and clean architecture in mind, allowing easy integration with the backend API.

## Backend

The backend API for this project is available here:  
https://github.com/amorindev/world-leaders-wiki-back

## Landing 
<img width="1366" height="648" alt="image" src="https://github.com/user-attachments/assets/96e925ca-ff28-47a6-b8b8-b92d3345b2c4" />

## Landing - logged in user 
<img width="1366" height="648" alt="image" src="https://github.com/user-attachments/assets/c2cab375-8715-452d-882e-06442ba562dc" />

## Home - Access will be granted if the user is logged in.
<img width="1366" height="646" alt="image" src="https://github.com/user-attachments/assets/609d9ada-09fc-4bd2-ad03-c361db82ebc2" />

## Sign in
<img width="1366" height="647" alt="image" src="https://github.com/user-attachments/assets/09ab0124-bc2e-487c-9600-429b998a2eae" />

## Sign up
<img width="1366" height="651" alt="image" src="https://github.com/user-attachments/assets/0392d677-078b-4479-b594-733278fbd534" />

## Verify account
<img width="1366" height="648" alt="image" src="https://github.com/user-attachments/assets/b63682b7-4c4d-4774-be2c-cb3290dac307" />

## Architecture

- Framework: Next.js (App Router)
- Language: TypeScript
- Styling: CSS / Tailwind
- Authentication: Cookie-based
- API Communication: REST (Axios)
- State Management: Redux
- Environment-based configuration

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/amorindev/nextjs-tmpl
    cd nextjs-tmpl
    ```

2. Install dependencies:
    ```bash
    pnpm install
    ```

3. Set environment variables, add a `.env` file if needed:
    ```env
    NEXT_PUBLIC_API_URL=http://localhost:8000
    ```

4. Run the development server:
    ```bash
    pnpm dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
