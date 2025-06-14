💰 Financial App

A simple, no-frills app to track your monthly expenses. Designed with a clean and minimal interface that keeps your focus on what matters: your spending.

---

🚀 Getting Started: Clone & Setup

Clone the repository:

  	git clone <repo-url>

Install dependencies

  	npm install

---

🛠️ Database Setup

Create a new Supabase project.

In your Supabase project:, run the following SQL query to create the necessary table:
 
    CREATE TABLE payment_subscription (
      id VARCHAR(255) PRIMARY KEY,
      user_id VARCHAR(255) NOT NULL,
      payment_name VARCHAR(100) NOT NULL,
      price INT NOT NULL,
      payment_day DATE,
      info VARCHAR(255)
    );

+ Go to Settings → API.
+ Copy your Project URL and anon public key.

Back in the repo create a .env.local file in the root of your project and add the following:
   
    NEXT_PUBLIC_SUPABASE_URL="<YOUR_PROJECT_URL>"
    
    NEXT_PUBLIC_SUPABASE_ANON_KEY="<YOUR_ANON_KEY>"

---

▶️ Run the App

Start the application:

    npm run start

