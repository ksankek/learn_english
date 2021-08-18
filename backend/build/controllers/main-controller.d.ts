declare class MainController {
    getWords(req: any, res: any): Promise<void>;
    knowWord(req: any, res: any): Promise<void>;
    addWord(req: any, res: any): Promise<any>;
}
export { MainController };
