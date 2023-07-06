export interface NavbarItemType {
  label: string;
  href: string;
  isDropDown: boolean;
  dropDownData?: Array<NavbarItemType>;
};


export const NavbarArray : Array<NavbarItemType> = [
    {
        label: "Female",
        href: "/female",
        isDropDown: true,
        dropDownData: [
            {
                label: "Dresses",
                href: "/female/dresses",
                isDropDown: false,
            },
            {
                label: "T-Shirts",
                href: "/female/t-shirts",
                isDropDown: false,
            },
            {
                label: "Pents",
                href: "/female/pents",
                isDropDown: false,
            },
            {
                label: "Jackets",
                href: "/female/jackets",
                isDropDown: false,
            },
            {
                label: "Sweaters",
                href: "/female/sweaters",
                isDropDown: false,
            }
        ]
    },
    {
        label: "Male",
        href: "/male",
        isDropDown: true,
        dropDownData: [
            {
                label: "Sweaters",
                href: "/male/sweaters",
                isDropDown: false,
            },
            {
                label: "Jackets",
                href: "/male/jackets",
                isDropDown: false,
            }
        ]
    },
    {
        label: "Kids",
        href: "/kids",
        isDropDown: false,
       
    },
    {
        label: "All Products",
        href: "/all products",
        isDropDown: false,
    }
];

