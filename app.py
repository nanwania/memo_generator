import streamlit as st
import your_tool  # Import your existing tool's functionality

# Title of the app
st.title("AI Startup Investment Memorandum Generator")

# Create the form
with st.form(key='memo_form'):
    startup_name = st.text_input("Startup Name", max_chars=50)
    investment_amount = st.number_input("Investment Amount", min_value=0)

    # Submit button
    submit_button = st.form_submit_button(label='Generate Memo')

# Handle form submission
if submit_button:
    # Generate the memorandum using your existing tool's functionality
    memo = your_tool.generate_memo(startup_name, investment_amount)
    
    # Display the result
    st.subheader("Generated Memorandum")
    st.write(memo)
