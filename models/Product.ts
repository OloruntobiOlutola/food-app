import { model, models, Schema } from "mongoose";

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "A product requires a title"],
    },
    description: {
      type: String,
      required: [true, "A product requires a title"],
    },
    image: {
      type: String,
      required: [true, "A product requires a title"],
    },
    price: {
      type: [Number],
      required: [true, "A product requires at least a price"],
    },
    extras: {
      type: [
        {
          text: {
            type: String,
            required: [true, "An extra requires a name"],
          },
          price: {
            type: Number,
            required: [true, "An extra requires at least a price"],
          },
        },
      ],
    },
  },
  {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);

const Product = models.Product || model("Product", productSchema);

export default Product;
