# Python Helper Functions

# Add common utility functions here

def print_separator(title=""):
    """Print a visual separator"""
    if title:
        print(f"\n{'='*50}")
        print(f"  {title}")
        print(f"{'='*50}\n")
    else:
        print(f"\n{'='*50}\n")

def get_input(prompt, input_type=str):
    """Safely get user input with type conversion"""
    while True:
        try:
            user_input = input(prompt)
            return input_type(user_input)
        except ValueError:
            print(f"Invalid input! Please enter a valid {input_type.__name__}")

# Add more helper functions as needed
