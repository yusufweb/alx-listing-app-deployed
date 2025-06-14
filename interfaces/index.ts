// Interfaces for the application - property listing.
export interface PropertyProps {
    name: string;
    address: {
        state: string;
        city: string;
        country: string;
    };
    rating: number;
    category: string[];
    price: number;
    offers: {
        bed: string;
        shower: string;
        occupants: string;
    };
    image: string;
    discount?: string;
}

export interface PillProp {
    title: string
}

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonShape = 'rounded-sm' | 'rounded-md' | 'rounded-full';

export interface ButtonProps {
  children: React.ReactNode;
  size?: ButtonSize;
  shape?: ButtonShape;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  [key: string]: any;
}
