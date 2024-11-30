const AddComment = () => {
  return (
    <div className="mt-5 ">
      <form className="flex flex-col gap-4">
        <textarea
          name="body"
          placeholder="قم بتقييم المعرض"
          className={`border p-2   border-border  outline-none rounded-lg w-full   resize-none`}
          rows="3"
        />

        <button
          type="submit"
          className={`bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/80 transition-all `}>
          اضف تقييم
        </button>
      </form>
    </div>
  );
};

export default AddComment;
