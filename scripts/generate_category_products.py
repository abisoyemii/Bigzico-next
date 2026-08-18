from pathlib import Path
import json

root = Path('data/products')
root.mkdir(exist_ok=True)

catalogs = [
    ('refrigerators', 'Refrigerators', ['Double Door', 'Top Mount', 'Single Door', 'Side by Side', 'French Door', 'Mini Fridge', 'Bottom Freezer'], ['LG','Samsung','Hisense','Haier Thermocool','Midea','Bosch','Panasonic','Scanfrost','Nexus','Bruhm']), 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=900&q=80'),
    ('freezers', 'Freezers', ['Chest Freezer', 'Upright Freezer', 'Deep Freezer', 'Commercial Freezer'], ['Hisense','Samsung','Scanfrost','Thermocool','Midea','Haier','Nexus','LG','Bruhm','Bosch']), 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&w=900&q=80'),
    ('air-conditioners', 'Air Conditioners', ['Split AC', 'Window AC', 'Portable AC', 'Commercial AC', 'Inverter AC'], ['Daikin','LG','Samsung','Midea','Hisense','Panasonic','TCL','Bosch','Midea','Hisense']), 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80'),
    ('washing-machines', 'Washing Machines', ['Front Load', 'Top Load', 'Semi Automatic', 'Twin Tub', 'Compact Washer'], ['LG','Samsung','Bosch','Hisense','Thermocool','Midea','Panasonic','Nexus','Bruhm','Scanfrost']), 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=900&q=80'),
    ('televisions', 'Televisions', ['Smart TV', '4K', 'OLED', 'LED', 'QLED'], ['LG','Samsung','Sony','Hisense','TCL','Philips','Panasonic','Sharp','Midea','Toshiba']), 'https://images.unsplash.com/photo-1593359677879-a4bb92f829e1?auto=format&fit=crop&w=900&q=80'),
    ('generators', 'Generators', ['Petrol', 'Diesel', 'Silent Generator', 'Industrial', 'Inverter Generator'], ['Firman','Sumec','Honda','Elemax','Tiger','Lister','JMG','Maxi','Nexus','Bruhm']), 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80'),
    ('microwaves', 'Microwaves', ['Solo', 'Convection', 'Grill', 'Smart Microwave'], ['LG','Samsung','Hisense','Panasonic','Scanfrost','Thermocool','Midea','Nexus','Bruhm','Binatone']), 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&w=900&q=80'),
    ('kitchen-appliances', 'Kitchen Appliances', ['Blender', 'Air Fryer', 'Toaster', 'Kettle', 'Food Processor'], ['Philips','Binatone','Scanfrost','Nexus','Bruhm','Midea','Panasonic','Tefal','LG','Samsung']), 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80'),
    ('smartphones', 'Smartphones', ['Android', 'iOS', 'Budget', '5G', 'Gaming'], ['Samsung','Apple','Tecno','Infinix','Xiaomi','Google','Oppo','Vivo','Nokia','OnePlus']), 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80'),
    ('laptops', 'Laptops', ['Business', 'Gaming', 'Student', 'Ultrabook', '2-in-1'], ['Dell','HP','Lenovo','Acer','Asus','Apple','Microsoft','Toshiba','Chuwi','Huawei']), 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80'),
]

for slug, category_name, subcats, brands, image in catalogs:
    items = []
    for i in range(1, 101):
        brand = brands[(i - 1) % len(brands)]
        subcategory = subcats[(i - 1) % len(subcats)]
        if slug == 'refrigerators':
            price = 285000 + (i * 7000)
            name = f'{brand} {subcategory} Refrigerator {i:02d}'
            features = ['Frost Free', 'Energy Saving', 'Low Noise', 'Large Capacity', 'Fast Cooling']
        elif slug == 'freezers':
            price = 180000 + (i * 5000)
            name = f'{brand} {subcategory} Freezer {i:02d}'
            features = ['Deep Freeze', 'Low Power Use', 'Lockable Lid', 'Noise Reduction', 'Large Capacity']
        elif slug == 'air-conditioners':
            price = 165000 + (i * 8000)
            name = f'{brand} {subcategory} {i:02d}'
            features = ['Inverter Technology', 'Quiet Operation', 'Rapid Cooling', 'Smart Control', 'Energy Efficient']
        elif slug == 'washing-machines':
            price = 240000 + (i * 6000)
            name = f'{brand} {subcategory} Washer {i:02d}'
            features = ['Quick Wash', 'Gentle Care', 'Steam Cleaning', 'Eco Mode', 'Smart Sensor']
        elif slug == 'televisions':
            price = 320000 + (i * 10000)
            name = f'{brand} {subcategory} TV {i:02d}'
            features = ['4K Resolution', 'Smart App Support', 'Wide Viewing Angle', 'HDR Display', 'Voice Control']
        elif slug == 'generators':
            price = 420000 + (i * 12000)
            name = f'{brand} {subcategory} Generator {i:02d}'
            features = ['Fuel Efficient', 'Auto Start', 'Low Noise', 'Long Runtime', 'Robust Build']
        elif slug == 'microwaves':
            price = 98000 + (i * 2000)
            name = f'{brand} {subcategory} Microwave {i:02d}'
            features = ['Defrost Mode', 'Auto Cook', 'Child Lock', 'Easy Clean', 'Fast Heating']
        elif slug == 'kitchen-appliances':
            price = 65000 + (i * 2500)
            name = f'{brand} {subcategory} {i:02d}'
            features = ['Durable Body', 'Easy Cleaning', 'Multiple Settings', 'Energy Efficient', 'Compact Design']
        elif slug == 'smartphones':
            price = 215000 + (i * 9000)
            name = f'{brand} {subcategory} {i:02d}'
            features = ['5G Ready', 'AI Camera', 'Fast Charging', 'Large Display', 'Secure Lock']
        else:
            price = 320000 + (i * 11000)
            name = f'{brand} {subcategory} Laptop {i:02d}'
            features = ['Portable', 'Long Battery Life', 'Fast SSD', 'HD Display', 'Lightweight']

        old_price = int(price * 1.12)
        discount = 5 + ((i * 3) % 16)
        rating = round(4.0 + ((i % 8) / 10), 1)
        review_count = 40 + ((i * 7) % 180)
        stock = 15 + (i % 10)
        featured = i % 6 == 0
        best_seller = i % 5 == 0
        trending = i % 7 == 0
        badge = 'Hot Deal' if discount > 10 else 'New Arrival' if i % 3 == 0 else 'Best Buy'
        warranty = '2 Years Warranty' if i % 2 == 0 else '3 Years Warranty'
        delivery = 'Free Delivery' if i % 2 == 0 else 'Express Delivery'

        item = {
            'id': f'{slug}-{i:03d}',
            'slug': f'{slug}-{i}',
            'sku': f'{slug[:3].upper()}-{1000 + i}',
            'name': name,
            'brand': brand,
            'brandSlug': brand.lower().replace(' ', '-').replace('.', ''),
            'category': category_name,
            'categorySlug': slug,
            'subcategory': subcategory,
            'shortDescription': f'Reliable {name.lower()} designed for everyday performance.',
            'description': f'{name} delivers dependable performance, modern design, and trusted value for homes, offices, and businesses across Nigeria.',
            'features': features,
            'specifications': [
                {'label': 'Capacity', 'value': 'Large' if slug in {'refrigerators', 'freezers', 'washing-machines'} else 'High Output' if slug == 'generators' else 'Ultra HD' if slug == 'televisions' else 'Fast Cook' if slug == 'microwaves' else '5G Ready' if slug == 'smartphones' else 'Powerful'} ,
                {'label': 'Warranty', 'value': warranty},
                {'label': 'Delivery', 'value': delivery},
            ],
            'tags': [slug, subcategory.lower(), brand.lower()],
            'thumbnail': image,
            'images': [image],
            'price': price,
            'compareAtPrice': old_price,
            'stock': stock,
            'isActive': True,
            'rating': rating,
            'reviewCount': review_count,
            'reviews': [
                {'id': f'{slug}-{i}-r1', 'customerName': 'Ada Okafor', 'rating': 5, 'title': 'Excellent', 'comment': 'Great quality and very durable.', 'date': '2025-06-01'},
                {'id': f'{slug}-{i}-r2', 'customerName': 'Micheal Lawal', 'rating': 4, 'title': 'Reliable', 'comment': 'Fast delivery and easy setup.', 'date': '2025-05-12'},
            ],
            'isFeatured': featured,
            'isFlashSale': discount > 10,
            'isBestSeller': best_seller,
            'image': image,
            'featured': featured,
            'flashSale': discount > 10,
            'bestSeller': best_seller,
            'oldPrice': old_price,
            'discount': discount,
            'badge': badge,
            'warranty': warranty,
            'delivery': delivery,
            'whatsappMessage': f'Hello BIGZICO, I would like to order {name}.',
            'trending': trending,
        }
        items.append(item)

    output = f"import type {{ Product }} from '@/lib/mock-data';\n\nexport const {slug.replace('-', '_')}Products: Product[] = {json.dumps(items, indent=2)};\n"
    (root / f'{slug}.ts').write_text(output, encoding='utf-8')

index_text = ""
for slug, *_ in catalogs:
    index_text += f"export {{ {slug.replace('-', '_')}Products }} from './{slug}';\n"
(root / 'index.ts').write_text(index_text, encoding='utf-8')
print('generated category product datasets')
