import { Schema, model } from "mongoose";

interface Word {
  word: string;
  translate: string;
  knowIt: boolean;
}

const schema = new Schema<Word>({
  word: {
    type: String,
    required: true,
    unique: true,
  },
  translate: {
    type: String,
    required: true,
  },
  knowIt: {
    type: Boolean,
    required: true,
  },
});

const Words = model("Words", schema);

export { Words };
