type Brand = number;
type CardTreeNode = CardTreeType | Brand;
type CardTreeType = {
  D?: Brand;
  [key: string]: CardTreeNode;
};
type BrandDetailsType = {
  type: string;
  luhn?: boolean;
  length?: number[];
  cvcLength?: number[];
  format?: string;
};
export { Brand, CardTreeNode, CardTreeType, BrandDetailsType }
