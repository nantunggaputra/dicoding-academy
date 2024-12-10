/**
 * TODO
 * Selesaikan kode pembuatan class Item dengan ketentuan:
 * - Memiliki properti `id` (number), `name` (string), `quantity` (number), dan `price` (number).
 * - Memiliki method `updateDetails()` untuk mengubah nilai `name`, `quantity`, dan `price`.
 * - Memiliki method `displayDetails()` yang mengembalikan informasi detail dari Item dengan format:
 *   ```
 *     ID: ${id}, Name: ${name}, Quantity: ${quantity}, Price: ${price}
 *   ```
 */

/**
 * Class representing an item in the inventory.
 * @class
 */
class Item {
  /**
   * Create an item.
   * @param {number} id - The unique identifier for the item.
   * @param {string} name - The name of the item.
   * @param {number} quantity - The quantity of the item in inventory.
   * @param {number} price - The price of the item.
   */
  constructor(id, name, quantity, price) {
    /** @type {number} */
    this.id = id;
    /** @type {string} */
    this.name = name;
    /** @type {number} */
    this.quantity = quantity;
    /** @type {number} */
    this.price = price;
  }

  /**
   * Update the details of the item.
   * @param {string} name - The new name of the item.
   * @param {number} quantity - The new quantity of the item.
   * @param {number} price - The new price of the item.
   */
  updateDetails(name, quantity, price) {
    this.name = name;
    this.quantity = quantity;
    this.price = price;
  }

  /**
   * Display the details of the item.
   * @returns {string} - The details of the item formatted as "ID: ${id}, Name: ${name}, Quantity: ${quantity}, Price: ${price}"
   */
  displayDetails() {
    return `ID: ${this.id}, Name: ${this.name}, Quantity: ${this.quantity}, Price: ${this.price}`;
  }
}

// Jangan hapus kode di bawah ini!
export default Item;
