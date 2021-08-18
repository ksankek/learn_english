import { Words as Word } from "../models/words";

class MainController {
  async getWords(req: any, res: any) {
    try {
      const words: any[] = await Word.find({ knowIt: false });
      if (words.length) {
        res.json(words);
      } else {
        const words: any[] = await Word.find({ knowIt: true });
        for (let i = 0; i < words.length; i++) {
          const filter = { word: words[i].word };
          const update = { knowIt: false };
          await Word.findOneAndUpdate(filter, update);
        }
        res.json("All the words are repeated");
      }
    } catch (e) {
      res.status(500).json({ message: `${e}` });
    }
  }

  async knowWord(req: any, res: any) {
    try {
      const { word } = req.body;

      const filter = { word };
      const update = { knowIt: true };
      let doc = await Word.findOneAndUpdate(filter, update);

      res.send(doc);
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: `${e}` });
    }
  }

  async addWord(req: any, res: any) {
    try {
      const { word, translate } = req.body;
      const repeatedWord = await Word.findOne({ word });

      if (repeatedWord) {
        return res.status(400).json({ message: "This word already added" });
      }

      const newWord = new Word({ word, translate, knowIt: false });

      await newWord.save();

      res.status(201).json({ message: "Word added" });
    } catch (e) {
      res.status(500).json({ message: `${e}` });
    }
  }
}

export { MainController };
