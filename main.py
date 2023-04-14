import openai

openai.api_key="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"

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