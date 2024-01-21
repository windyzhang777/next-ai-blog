import { FormattedPost } from "@/app/types";
import { PencilSquareIcon, XMarkIcon } from "@heroicons/react/24/solid";

type CategoryAndEditProps = {
  isEditable: boolean;
  post: FormattedPost;
  toggleIsEditable: () => void;
};

const CategoryAndEdit = ({
  isEditable,
  post,
  toggleIsEditable,
}: CategoryAndEditProps) => {
  return (
    <div className="flex justify-between items-center mt-6">
      <div className="uppercase font-bold text-sm bg-accent-orange px-8 py-2">
        {post.category}
      </div>
      <button type="button" onClick={toggleIsEditable}>
        {isEditable ? (
          <XMarkIcon className="h-6 w-6 text-accent-red" />
        ) : (
          <PencilSquareIcon className="h-6 w-6 text-accent-red" />
        )}
      </button>
    </div>
  );
};

export default CategoryAndEdit;
