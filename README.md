Features

- Simulates a realistic phishing page (for example, a fake login form) to show how attackers trick users into entering credentials. [github](https://github.com/Cyberguy786/Phishing_Simulation)
- Captures and stores submitted data locally so learners can inspect what was collected and how. [github](https://github.com/Cyberguy786/Phishing_Simulation)
- Simple, lightweight implementation suitable for college projects and demonstrations in labs or classrooms. [github](https://github.com/Cyberguy786/Phishing_Simulation)
- Clean project structure so beginners can understand each component (frontend page, backend handler, data storage).  



Project Structure

Update the folder/file names below according to your actual repository layout.

bash
phishing-attack-simulation-device/
├─ app.py               Backend / server script (if using Python/Flask or similar)
├─ index.html           Main phishing page (fake login or capture page)
├─ /templates           HTML templates (if using a framework)
├─ /static              CSS, images, JS files to style the phishing page
├─ collected_data.txt   Example storage file for captured credentials
└─ README.md            Project documentation


- Backend script: Handles form submissions and stores captured data.  
- HTML/CSS/JS: Renders the phishing page and any client-side behavior.  
- Data store: Simple file or database that logs what users typed (for demonstration only). [github](https://github.com/Cyberguy786/Phishing_Simulation)



How It Works

1. The user visits the phishing simulation URL (for example, http://localhost:5000).  
2. The fake page imitates a legitimate login or service and asks for credentials or other sensitive information. [github](https://github.com/Cyberguy786/Phishing_Simulation)
3. When the user submits the form, the backend script receives the data and writes it to a local file or database. [github](https://github.com/Cyberguy786/Phishing_Simulation)
4. The page then shows a success or error message, demonstrating how attackers may silently collect information. [github](https://github.com/Cyberguy786/Phishing_Simulation)
5. In a classroom or lab, the instructor can then open the stored data file to show what was captured and explain the risks.  


Technologies Used

Adapt this list to match your implementation:

- Python 3.x with Flask (or another framework) for handling HTTP requests and form submissions. [github](https://github.com/Cyberguy786/Phishing_Simulation)
- HTML5 for the structure of the fake phishing page. [github](https://github.com/Cyberguy786/Phishing_Simulation)
- CSS3 for styling and making the page look convincing.  
- JavaScript (optional) for basic validation or UI effects.  
- Text file / simple database** for logging submitted credentials. [github](https://github.com/Cyberguy786/Phishing_Simulation)


Installation and Setup

Prerequisites

- Python 3.x installed on your system (if using a Python backend). [github](https://github.com/Cyberguy786/Phishing_Simulation)
- pip package manager.  
- A code editor (VS Code, PyCharm, etc.).  

Steps

1.Clone the repository

   bash
   git clone https://github.com/Jasminekaur-ux/phishing-attack-simulation-device.git
   cd phishing-attack-simulation-device
  

2.Create and activate a virtual environment (optional but recommended)

   bash
   python -m venv venv
   Windows
   venv\Scripts\activate
   Linux / macOS
   source venv/bin/activate
  

3. Install dependencies

   Adjust package names according to your requirements.txt or actual use.

  bash
   pip install -r requirements.txt
  
   or, for a simple Flask setup:

  bash
   pip install flask
 

4. Run the application

   Example for Flask-based app:

   bash
   python app.py
   

5. Open in browser

   Visit:

  text
   http://127.0.0.1:5000
  
   or whatever host/port your script prints in the terminal. [github](https://github.com/Cyberguy786/Phishing_Simulation)



Usage

1. Start the server as described above.  
2. Share the local URL (within a lab network or on your own machine) for demonstration.  
3. Enter sample credentials (dummy data) on the phishing page.  
4. After submission, open the storage file (for example, collected_data.txt) and show what has been logged. [github](https://github.com/Cyberguy786/Phishing_Simulation)
5. Use this to explain:
   - Why users should always check URLs and certificates.  
   - How easy it is to build realistic phishing pages.  
   - Best practices to avoid becoming a victim.  



Educational Objectives

This project can be used to:

- Demonstrate the complete flow of a phishing attack from the victim’s perspective.  
- Show the technical steps attackers take to collect and store user input.  
- Support cybersecurity awareness sessions and ethical hacking labs.  
- Teach secure behavior, such as verifying URLs and not entering credentials on suspicious pages.  



Limitations

- This is a simplified **simulation**, not a full phishing framework.  
- It runs on a local environment (or controlled test network) and is not meant for internet-scale campaigns. [github](https://github.com/jenyraval/Phishing-Simulation)
- Data storage is basic and intended for demonstration, not long-term or secure logging.  



Ethical and Legal Disclaimer

- This project is intended **only** for educational, research, and awareness purposes in controlled environments.  
- You must have explicit written permission from all participants and system owners before running any phishing simulation.  
- Misuse of this project to target real users or systems without consent may violate local laws and institutional policies.  
- The author(s) and contributors are not responsible for any misuse or damage caused by this project.  



Future Enhancements

You can extend this project with:

- Multiple fake pages (email login, cloud storage, banking, etc.).  
- Dashboard to view captured data in a more visual way.  
- Analytics such as time of submission and IP address in a lab environment.  
- Integration with awareness training modules or quizzes after the simulation.  



Contributing

Contributions, suggestions, and improvements are welcome:

1. Fork this repository.  
2. Create a new branch for your feature or bugfix.  
3. Commit and push your changes.  
4. Open a pull request with a clear description and screenshots (if applicable).  



License

Specify your license here, for example:

```text
This project is licensed under the MIT License. See the LICENSE file for details.
```

Update this section to match the actual license you choose (MIT, GPL-3.0, etc.). [github](https://github.com/jenyraval/Phishing-Simulation)
