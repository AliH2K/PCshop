export interface productDataType {
  id: number;
  name: string;
  price: number;
  gpu: string;
  cpu: string;
  ram: string;
  hdd: string;
  ssd: string;
}

export interface ShopContextType {
  showShop: boolean;
  items: Array<{ id: number; quantity: number }>;
  setShowShop: (show: boolean) => void;
  getProductQuantity: (id: number) => number;
  addOneToCart: (id: number) => void;
  removeOneFromCart: (id: number) => void;
  deleteFromCart: (id: number) => void;
  getTotalCost: () => number;
}

export interface CartProductProps {
  id: number;
  quantity: number;
}
