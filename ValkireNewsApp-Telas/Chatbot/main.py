import os
import openai
from dotenv import load_dotenv

load_dotenv()

openai.api_key = os.getenv('openai_key')

completion = openai.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
        {"role": "system", "content": "Você é um assitente que retorna o resumo da noticia que o usuario compartilhar no chat"},
        {
            "role": "user",
            "content": "Resuma esta noticia: ()"
        }
    ]
)

print(completion.choices[0].message)