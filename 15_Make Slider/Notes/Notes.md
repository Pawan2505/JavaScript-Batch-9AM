### **Build a Simple Slider Project**

---

**Objective:**  
Build a simple image slider that automatically cycles through images and allows manual navigation using Next and Previous buttons.

---

### **1. HTML Structure:**
- Create a container element (`.slider-container`) to hold the images.
- Each image should be inside a `div` (e.g., `.img-slider`), which is placed inside the container.
- Add **Next** and **Previous** buttons for manual control.

---

### **2. CSS Styling:**
- **Container:** Set `width: 100%` and `overflow: hidden` to make the container responsive and hide images that aren’t visible.
- **Slides:** Position slides absolutely (`position: absolute`) and set their width to 100% so they fill the container.
- **Buttons:** Position the Next and Previous buttons on the left and right sides of the container.

---

### **3. JavaScript Functionality:**
- **Select Slides:** Use `querySelectorAll()` to grab all images.
- **Positioning:** Set each slide's position based on its index, using `left` or `transform: translateX()` in CSS.
- **Manual Navigation:**  
  - **Next:** Move to the next slide by updating its position.
  - **Previous:** Move to the previous slide with the same logic. Loop around when reaching the last or first slide.
- **Auto-Slide:** Use `setInterval()` to move the slider automatically every few seconds.

---

### **4. Key Concepts:**
- **Positioning:** Slides are stacked using `absolute` positioning and moved using `transform: translateX()`.
- **Event Handling:** Use JavaScript events to handle Next/Previous button clicks.
- **Auto-Slide:** `setInterval()` is used for automatic transitions.

---

### **Practice:**
- Add CSS transitions for smoother sliding.
- Make the slider responsive and handle edge cases (looping between the first and last slides).

---

