# Web Data Viewer

This project provides a simple web app to display data from an Excel file converted to CSV, with a backend script to process the data and a CI workflow for automated checks and deployment.

## Usage Guide
1. Clone this repository:
   ```bash
   git clone <repository_url>
   ```
2. Ensure `data.csv` is present in the root directory.
3. Open `index.html` in your browser to view the data table.

## Cloning Guide
Use the command:
```bash
git clone <repository_url>
```

## License
This project is licensed under the MIT License. We welcome collaboration and contributions!

## Notes
- The `execute.py` script processes the data.
- The `data.xlsx` file is converted to `data.csv`.
- The CI workflow runs code quality checks, executes the script, and publishes results on GitHub Pages.

---

<!-- The following files are part of the project: -->

<<execute.py>>
import json
import pandas as pd

def main():
    # Read the Excel data
    df = pd.read_excel('data.xlsx')
    # Prepare the result dictionary
    result = {
        "columns": list(df.columns),
        "rows": df.values.tolist()
    }
    # Save to JSON
    with open('result.json', 'w') as f:
        json.dump(result, f)

if __name__ == "__main__":
    main()