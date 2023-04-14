import openai

openai.api_key="Yourapi"

completion=openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
    {
        "role":"user",
        "content": "Hi? Can you hear me?"
    }
    ],
)
print(completion)