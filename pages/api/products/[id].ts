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
  const {
    method,
    query: { id },
  } = req;

  dbConnect();

  if (method === "GET") {
    try {
      const product = await Product.findById(id);
      res.status(200).json({
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
  if (method === "PUT") {
    try {
      const product = await Product.findByIdAndUpdate(
        id,
        { ...req.body },
        {
          new: true,
        }
      );
      res.status(200).json({
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

  if (method === "DELETE") {
    try {
      await Product.findByIdAndDelete(req.body);
      res.status(204).json({
        status: "success",
      });
    } catch (error) {
      res.status(400).json({
        status: "fail",
        error,
      });
    }
  }
}
