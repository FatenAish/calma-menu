CALMA MENU — 7th Circle

Live menu: https://fatenaish.github.io/calma-menu/

The active menu displays 83 approved beverages (from CALMA_Drinks_Menu_Updated(2).xlsx) plus the original 55 food, dessert, snack and shisha items: 138 total.

The original page and its product photos are preserved in original-menu.html. index.html loads that source and applies the approved beverage list from menu-override.js, which removes drinks not in the spreadsheet. Existing matching drink prices are retained; drinks without a confirmed previous price show a dash (—). Some new drink variants currently reuse the closest existing product photo.

To edit drink names, sections, or image mappings, change menu-override.js. To update the original food and shisha sections or their photos, update original-menu.html. The index.html loader should remain lightweight.

7th Circle is the only branch shown in the menu. GitHub Pages publishes from main at the repository root and the menu URL stays the same, so the existing QR code does not need to change.
