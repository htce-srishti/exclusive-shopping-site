export const categories = [
    { id: "phones", label: "Phones" },
    { id: "laptops", label: "Laptops" },
    { id: "gaming", label: "Gaming" },
    { id: "audio", label: "Headphones" },
];

export const products = [
    {
        id: "1",
        name: "HAVIT HV‑G92 Gamepad",
        price: 59.99,
        oldPrice: 79.99,
        discount: 25,
        category: "gaming",
        image:
            "src/pages/Frame 611.png",
        rating: 4.6,
        reviewCount: 112,
        badge: "Best Seller",
        description:
            "Lag‑free wireless game controller compatible with PC and consoles.",
    },
    {
        id: "2",
        name: "AKG N700NC Headphones",
        price: 119.0,
        oldPrice: 149.0,
        discount: 20,
        category: "audio",
        image:
            "src/pages/Frame 612.png",
        rating: 4.8,
        reviewCount: 89,
        badge: "Featured",
        description: "Noise‑cancelling headphones with 30h battery and fast charge.",
    },
    {
        id: "3",
        name: "Samsung Galaxy S Series",
        price: 899.0,
        oldPrice: 999.0,
        discount: 10,
        category: "phones",
        image:
            "src/pages/g27cq4-500x500 1.png",
        rating: 4.7,
        reviewCount: 326,
        badge: "Hot",
        description: "6.7'' OLED, triple camera, 5G, 120Hz display.",
    },
    {
        id: "4",
        name: "Ultrabook 14\" Laptop",
        price: 1299.0,
        oldPrice: 1499.0,
        discount: 13,
        category: "Speaker",
        image:
            "./src/pages/speacker img.svg",
        rating: 4.5,
        reviewCount: 205,
        badge: "New",
        description: "Slim lightweight laptop with all‑day battery.",
    },
];

export function getProductById(id) {
    return products.find((p) => p.id === id);
}