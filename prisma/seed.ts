const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  try {
    const mousesCategory = await prisma.category.create({
      data: {
        name: "Mouses",
        slug: "mouses",
        imageUrl: "https://fsw-store.s3.sa-east-1.amazonaws.com/mouses.png",
      },
    });

    const mouses = [
      {
        name: "Logitech MX Master 3s",
        slug: "logitech-mx-master-3s",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F01_mx-master-3s.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F02_mx-master-3s.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F03_mx-master-3s.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F04_mx-master-3s.png&w=1920&q=75",
        ],
        basePrice: 650,
        categoryId: mousesCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech Pro X Superlight",
        slug: "logitech-pro-x-superlight",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F01_logi-superlight.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F02_logi-superlight.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F03_logi-superlight.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F04_logi-superlight.png&w=1920&q=75",
        ],
        basePrice: 750,
        categoryId: mousesCategory.id,
        discountPercentage: 5, // 5% discount
      },
      {
        name: "Logitech G305 Lightspeed",
        slug: "logitech-g305-lightspeed",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F01_logi-lightspeed.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F02_logi-lightspeed.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F03_logi-lightspeed.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F04_logi-lightspeed.png&w=1920&q=75",
        ],
        basePrice: 300,
        categoryId: mousesCategory.id,
        discountPercentage: 15, // 15% discount
      },
      {
        name: "Hyperx Pulsefire Dart",
        slug: "hyperx-pulsefire-dart",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F01_hyperx-dart.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F02_hyperx-dart.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F03_hyperx-dart.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F04_hyperx-dart.png&w=1920&q=75",
        ],
        basePrice: 600,
        categoryId: mousesCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Razer Deathadder V2 Pro",
        slug: "razer-deathadder-v2-pro",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F01_razer-deathadder.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F02_razer-deathadder.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F03_razer-deathadder.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F04_razer-deathadder.png&w=1920&q=75",
        ],
        basePrice: 350,
        categoryId: mousesCategory.id,
        discountPercentage: 0,
      },
    ];

    await prisma.product.createMany({
      data: mouses,
    });

    const keyboardsCategory = await prisma.category.create({
      data: {
        name: "Teclados",
        slug: "keyboards",
        imageUrl: "https://fsw-store.s3.sa-east-1.amazonaws.com/keyboards.png",
      },
    });

    const keyboards = [
      {
        name: "Logitech MX Keys Mini",
        slug: "logitech-mx-keys-mini",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F01_logi-mx-keys-mini.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F02_logi-mx-keys-mini.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F03_logi-mx-keys-mini.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F04_logi-mx-keys-mini.png&w=1920&q=75",
        ],
        basePrice: 650,
        categoryId: keyboardsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech MX Keys S",
        slug: "logitech-mx-keys-s",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F01_logi-mx-keys-s.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F02_logi-mx-keys-s.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F03_logi-mx-keys-s.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F04_logi-mx-keys-s.png&w=1920&q=75",
        ],
        basePrice: 750,
        categoryId: keyboardsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech Pop Keys",
        slug: "logitech-pop-keys",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F01_logi-pop-keys.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F02_logi-pop-keys.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F03_logi-pop-keys.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F04_logi-pop-keys.png&w=1920&q=75",
        ],
        basePrice: 440,
        categoryId: keyboardsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Logitech MX Mechanical",
        slug: "logitech-mx-mechanical",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F01_logi-mx-mechanical.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F02_logi-mx-mechanical.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F03_logi-mx-mechanical.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F04_logi-mx-mechanical.png&w=1920&q=75",
        ],
        basePrice: 700,
        categoryId: keyboardsCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Epomaker TH80",
        slug: "epomaker-th80",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F01_epomaker-th80.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F02_epomaker-th80.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F03_epomaker-th80.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F04_epomaker-th80.png&w=1920&q=75",
        ],
        basePrice: 500,
        categoryId: keyboardsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Redragon Gamer Ashe",
        slug: "redragon-gamer-ashe",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F01_redragon-gamer-ashe.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F02_redragon-gamer-ashe.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F03_redragon-gamer-ashe.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F04_redragon-gamer-ashe.png&w=1920&q=75",
        ],
        basePrice: 400,
        categoryId: keyboardsCategory.id,
        discountPercentage: 25, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: keyboards,
    });

    const headphonesCategory = await prisma.category.create({
      data: {
        name: "Fones",
        slug: "headphones",
        imageUrl: "https://fsw-store.s3.sa-east-1.amazonaws.com/headphones.png",
      },
    });

    const headphones = [
      {
        name: "Logitech Zone Vibe 100",
        slug: "logitech-zone-vibe-100",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F01_logi-vibe.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F02_logi-vibe.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F03_logi-vibe.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F04_logi-vibe.png&w=1920&q=75",
        ],
        basePrice: 750,
        categoryId: headphonesCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech Pro X 2 Lightspeed",
        slug: "logitech-pro-x-2-lightspeed",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F01_logi-lightspeed-phone.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F02_logi-lightspeed-phone.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F03_logi-lightspeed-phone.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F04_logi-lightspeed-phone.png&w=1920&q=75",
        ],
        basePrice: 1200,
        categoryId: headphonesCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Logitech Astro A30",
        slug: "logitech-astro-a30",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F01_logi-astro-a30.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F02_logi-astro-a30.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F03_logi-astro-a30.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F04_logi-astro-a30.png&w=1920&q=75",
        ],
        basePrice: 1500,
        categoryId: headphonesCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Logitech Zone Wired Earbuds",
        slug: "logitech-zone-wired-earbuds",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F01_logi-earbuds.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F02_logi-earbuds.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F03_logi-earbuds.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F04_logi-earbuds.png&w=1920&q=75",
        ],
        basePrice: 550,
        categoryId: headphonesCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Hyperx Cloud Stinger 2",
        slug: "hyperx-cloud-stinger-2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F01_hyperx-stinger.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F02_hyperx-stinger.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F03_hyperx-stinger.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F04_hyperx-stinger.png&w=1920&q=75",
        ],
        basePrice: 250,
        categoryId: headphonesCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Razer Kraken X",
        slug: "razer-kraken-x",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F01_razer-kraken.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F02_razer-kraken.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F03_razer-kraken.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F04_razer-kraken.png&w=1920&q=75",
        ],
        basePrice: 200,
        categoryId: headphonesCategory.id,
        discountPercentage: 0, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: headphones,
    });

    const mousepadsCategory = await prisma.category.create({
      data: {
        name: "Mousepads",
        slug: "mousepads",
        imageUrl: "https://fsw-store.s3.sa-east-1.amazonaws.com/mousepads.png",
      },
    });

    const mousepads = [
      {
        name: "Logitech Powerplay",
        slug: "logitech-powerplay",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F01_logi-powerplay.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F02_logi-powerplay.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F03_logi-powerplay.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F04_logi-powerplay.png&w=1920&q=75",
        ],
        basePrice: 950,
        categoryId: mousepadsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech Desk Mat",
        slug: "logitech-desk-mat",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F01_logi-desk-mat.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F02_logi-desk-mat.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F03_logi-desk-mat.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F04_logi-desk-mat.png&w=1920&q=75",
        ],
        basePrice: 150,
        categoryId: mousepadsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Logitech G740",
        slug: "logitech-g740",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F01_logi-g740.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F02_logi-g740.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F03_logi-g740.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F04_logi-g740.png&w=1920&q=75",
        ],
        basePrice: 200,
        categoryId: mousepadsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Logitech Mousepad Studio Series",
        slug: "logitech-mousepad-studio-series",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F01_logi-studio-series.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F02_logi-studio-series.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F03_logi-studio-series.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F04_logi-studio-series.png&w=1920&q=75",
        ],
        basePrice: 250,
        categoryId: mousepadsCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Force One Skyhawk Dark",
        slug: "force-one-skyhawk-dark",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F01_force-dark.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F02_force-dark.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F03_force-dark.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F04_force-dark.png&w=1920&q=75",
        ],
        basePrice: 300,
        categoryId: mousepadsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Force One Skyhawk Snow",
        slug: "force-one-skyhawk-snow",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F01_force-snow.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F02_force-snow.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F03_force-snow.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F04_force-snow.png&w=1920&q=75",
        ],
        basePrice: 300,
        categoryId: mousepadsCategory.id,
        discountPercentage: 5, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: mousepads,
    });

    const monitorsCategory = await prisma.category.create({
      data: {
        name: "Monitores",
        slug: "monitors",
        imageUrl: "https://fsw-store.s3.sa-east-1.amazonaws.com/monitors.png",
      },
    });

    const monitors = [
      {
        name: "Dell S2421HN",
        slug: "dell-s2421hn",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F01_dell-S2421HN.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F02_dell-S2421HN.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F03_dell-S2421HN.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F04_dell-S2421HN.png&w=1920&q=75",
        ],
        basePrice: 1500,
        categoryId: monitorsCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Dell P2422H",
        slug: "dell-p2422h",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F01_dell-P2422H.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F02_dell-P2422H.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F03_dell-P2422H.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F04_dell-P2422H.png&w=1920&q=75",
        ],
        basePrice: 2000,
        categoryId: monitorsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Dell P2723QE",
        slug: "dell-p2723qe",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F01_dell-P2723QE.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F02_dell-P2723QE.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F03_dell-P2723QE.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F04_dell-P2723QE.png&w=1920&q=75",
        ],
        basePrice: 2500,
        categoryId: monitorsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Dell S3422DWG",
        slug: "dell-s3422dwg",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F01_dell-S3422DWG.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F02_dell-S3422DWG.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F03_dell-S3422DWG.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F04_dell-S3422DWG.png&w=1920&q=75",
        ],
        basePrice: 3200,
        categoryId: monitorsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Dell S3222DGM",
        slug: "dell-s3222dgm",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F01_dell-S3222DGM.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F02_dell-S3222DGM.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F03_dell-S3222DGM.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F04_dell-S3222DGM.png&w=1920&q=75",
        ],
        basePrice: 3500,
        categoryId: monitorsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Dell AW2524HF",
        slug: "dell-aw2524hf",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F01_dell-AW2524HF.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F02_dell-AW2524HF.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F03_dell-AW2524HF.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F04_dell-AW2524HF.png&w=1920&q=75",
        ],
        basePrice: 4200,
        categoryId: monitorsCategory.id,
        discountPercentage: 10, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: monitors,
    });

    const speakersCategory = await prisma.category.create({
      data: {
        name: "Speakers",
        slug: "speakers",
        imageUrl: "https://fsw-store.s3.sa-east-1.amazonaws.com/speakers.png",
      },
    });

    const speakers = [
      {
        name: "Logitech Surround Sound Z607",
        slug: "logitech-surround-sound-z607",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F01_logi-surround-z607.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F02_logi-surround-z607.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F03_logi-surround-z607.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F04_logi-surround-z607.png&w=1920&q=75",
        ],
        basePrice: 1200,
        categoryId: speakersCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Logitech Dock",
        slug: "logitech-dock",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F01_logi-dock.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F02_logi-dock.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F03_logi-dock.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F04_logi-dock.png&w=1920&q=75",
        ],
        basePrice: 4500,
        categoryId: speakersCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Sony SA-Z9R Speakers",
        slug: "sony-sa-z9r-speakers",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F01_sony-SA-Z9R.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F02_sony-SA-Z9R.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F03_sony-SA-Z9R.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F04_sony-SA-Z9R.png&w=1920&q=75",
        ],
        basePrice: 4000,
        categoryId: speakersCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Sony XB43 Extra Bass",
        slug: "sony-xb43-extra-bass",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F01_sony-extra-bass.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F02_sony-extra-bass.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F03_sony-extra-bass.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F04_sony-extra-bass.png&w=1920&q=75",
        ],
        basePrice: 3200,
        categoryId: speakersCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Sony XB23 Extra Bass",
        slug: "sony-xb23-extra-bass",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F01_sony-XB23.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F02_sony-XB23.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F03_sony-XB23.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F04_sony-XB23.png&w=1920&q=75",
        ],
        basePrice: 3500,
        categoryId: speakersCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Sony HT-S200F Soundbar",
        slug: "sony-ht-s200f-soundbar",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F01_sony-S200F.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F02_sony-S200F.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F03_sony-S200F.png&w=1920&q=75",
          "https://fsw-store-ashy.vercel.app/_next/image?url=https%3A%2F%2Ffsw-store-rafa.s3.sa-east-1.amazonaws.com%2F04_sony-S200F.png&w=1920&q=75",
        ],
        basePrice: 2500,
        categoryId: speakersCategory.id,
        discountPercentage: 0, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: speakers,
    });

    console.log("Seed completed successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });