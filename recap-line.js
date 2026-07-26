const recapConfig = {
  prefix: "🏁",
  maxCharacters: 255,
};

const recapLabel = `${recapConfig.prefix} recap:`;
const recapLineInstruction = `
End each substantive reply with "${recapLabel}" followed by a concise, turn-scoped handoff in natural collaborative prose.
Summarize what we are working on and why, not merely that a task completed.
When useful, use a second sentence beginning "Right now:" to name the immediate state, blocker, decision, or recommended next move.
Prefer specific, continuity-friendly wording in a natural "we/you" voice over terse status language.
Keep the entire recap, including its label, to one paragraph, at most two sentences, and no more than ${recapConfig.maxCharacters} characters.
Skip the recap only for greetings or pure clarifying questions.
`.trim();

const RecapLinePlugin = async () => ({
  "experimental.chat.system.transform": async (_input, output) => {
    output.system.push(recapLineInstruction);
  },
});

export default RecapLinePlugin;
