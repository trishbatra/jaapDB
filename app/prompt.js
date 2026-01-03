export const prompt = (secure_link) => {
  console.log(secure_link)
  if (!secure_link) return " say hi to guy named trish and tell him errror hai bee";

  return `
You are given an image at the following URL:
${secure_link}

Your task:
- Count the total number of names recited (naam jaap) visible in the image.
- 1 mala = 108 recitations.

Rules:
- Calculate the number of complete malas.
- Any remaining count after dividing by 108 should be counted as "extras".

Example:
- If the total count is 1090:
  - 1090 / 108 = 10 complete malas
  - Remaining extras = 1090 - (10 * 108) = 10

Output requirements:
- Return ONLY a valid JSON object.
- Do NOT include any explanation or extra text.
- Do NOT wrap the JSON in a string.

Required JSON format:

{
  "mala": <number_of_complete_malas>,
  "extras": <number_of_extra_recitations>,
  "date_and_time": "<current date and time as a string>"
}
`;
};
