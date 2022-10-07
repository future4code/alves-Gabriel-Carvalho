import { Request, Response } from "express";
import { ProductBusiness } from "../business/ProductBusiness";

export class ProductController {
  constructor(private productBusiness: ProductBusiness) {}

  public insert = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;
      const response = await this.productBusiness.insert();
      res.status(200).send(response);
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  };
}
