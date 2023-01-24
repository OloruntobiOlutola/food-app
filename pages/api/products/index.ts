// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Product from "../../../models/Product";
import dbConnect from "../../../utils/db";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  dbConnect();

  if (method === "GET") {
    try {
      const products = await Product.find();
      res.status(200).json({
        status: "success",
        results: products.length,
        products,
      });
    } catch (error) {
      res.status(400).json({
        status: "fail",
        error,
      });
    }
  }
  if (method === "POST") {
    try {
      const product = await Product.create(req.body);
      res.status(201).json({
        status: "success",
        product,
      });
    } catch (error) {
      res.status(400).json({
        status: "fail",
        error,
      });
    }
  }
}
