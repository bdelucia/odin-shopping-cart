import confetti from 'canvas-confetti';

const OrderButton = () => {
  const handleCompleteOrder = () => {
    // Get button position for confetti origin
    const button = document.querySelector('.complete-order-btn');

    if (!button) {
      console.warn('Button not found for confetti positioning');
      return;
    }

    const rect = button.getBoundingClientRect();

    // Calculate the center of the button relative to the viewport
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    // Create aggressive burst effect from button
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { x, y },
      angle: 90,
      startVelocity: 45,
      scalar: 1.2,
      ticks: 200,
      shapes: ['square', 'circle'],
      colors: [
        '#ff0000',
        '#00ff00',
        '#0000ff',
        '#ffff00',
        '#ff00ff',
        '#00ffff',
      ],
    });

    // Add a second burst for more dramatic effect
    setTimeout(() => {
      confetti({
        particleCount: 50,
        spread: 100,
        origin: { x, y },
        angle: 60,
        startVelocity: 35,
        scalar: 0.8,
        ticks: 150,
      });
    }, 150);

    // Your order completion logic here
    console.log('Order completed!');
  };

  return (
    <button
      className="btn btn-accent text-accent-content complete-order-btn"
      onClick={handleCompleteOrder}
    >
      Complete Order
    </button>
  );
};

export default OrderButton;
