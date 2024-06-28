// src/components/Button.tsx

interface ButtonProps {
  onClick: () => void;
  content: string;
}

/**
 * Button component.
 * Renders a button element with a teal background and white text.
 * @param onClick The function to call when the button is clicked.
 * @param content The text content of the button.
 */
export const Button: React.FC<ButtonProps> = ({ onClick, content }) => {
  return (
    <button
      className="bg-teal-700 text-white px-4 py-2 rounded mt-4 hover:bg-teal-800 transition-colors duration-300 ease-in-out"
      onClick={onClick}
    >
      {content}
    </button>
  );
};

// TODO:
// - extend the Button component to accept a color prop
