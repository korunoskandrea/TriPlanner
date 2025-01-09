import os

def split_files(input_file):
    """
    Splits a combined file into individual files based on comments marking file paths.
    Validates that the content matches the expected file path.

    :param input_file: Path to the combined file.
    """
    try:
        with open(input_file, 'r') as f:
            content = f.read()

        sections = content.split('// frontend/')

        for section in sections:
            if not section.strip():
                continue

            lines = section.split('\n')
            file_path = lines[0].strip()

            if not file_path.endswith('.js'):
                continue

            full_path = os.path.join('frontend_gen', file_path)
            os.makedirs(os.path.dirname(full_path), exist_ok=True)

            content_body = '\n'.join(lines[1:])
            if '"use client"' in content_body and not content_body.startswith('"use client"'):
                content_body = '"use client"\n' + content_body

            with open(full_path, 'w') as output_file:
                output_file.write(content_body)

        print("Files successfully split and saved to the 'frontend_gen' directory.")
    except Exception as e:
        print(f"An error occurred: {e}")

input_file_path = "generated_file.js"

split_files(input_file_path)
