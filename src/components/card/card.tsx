import {
  ChangeEvent,
  KeyboardEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import { Modal } from "../modal";
import s from "./card.module.scss";
import { useAppSelector } from "../../store/hooks/useAppSelector";
import { ICard } from "./card.types";
import {
  getAllProjectTasksAction,
  getCommentsAction,
  getTaskByIdAction,
  useAppDispatch,
} from "../../store";
import { addComment, editTask } from "../../api";
import { useParams } from "react-router-dom";

export const Card: React.FC<ICard> = ({ id, isOpen, onClose }) => {
  const { projectId } = useParams();
  const [titleChange, setTitleChange] = useState(false);
  const [title, setTitle] = useState("");
  const [descriptionChange, setDescriptionChange] = useState(false);
  const [description, setDescription] = useState("");
  const [comment, setComment] = useState("");
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  const taskState = useAppSelector((state) => state.task);
  const { comments } = useAppSelector((state) => state.comment);
  const dispatch = useAppDispatch();

  const date = new Date(taskState.createdDate);

  useEffect(() => {
    console.log(date.toDateString());

    if (isOpen) {
      dispatch(getTaskByIdAction(id));
      dispatch(getCommentsAction(id));
    }
  }, [isOpen]);

  useEffect(() => {
    setTitle(taskState.title);
    titleRef.current?.focus();
  }, [titleChange]);

  const handleSetTitleChange = () => {
    setTitleChange((prev) => !prev);
  };
  const handleSetDescriptionChange = async () => {
    console.log(descriptionChange);

    if (descriptionChange) {
      const data = await editTask(id, {
        ...taskState,
        description: description,
      });

      if (data && projectId) {
        dispatch(getTaskByIdAction(id));
        dispatch(getAllProjectTasksAction(+projectId));
      }
    }
    setDescriptionChange((prev) => !prev);
  };

  const handleOnChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleOnEnterDown: KeyboardEventHandler<HTMLInputElement> = async (
    e
  ) => {
    if (e.key === "Enter") {
      const data = await editTask(id, { ...taskState, title: title });
      if (data && projectId) {
        dispatch(getTaskByIdAction(id));
        dispatch(getAllProjectTasksAction(+projectId));
      }
      setDescriptionChange(false);
    }
  };

  const handleOnChangedescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handleChangeComment = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };
  const handleAddComment = async () => {
    const data = await addComment(taskState.id, comment);
    if (data) dispatch(getCommentsAction(id));
    setComment("");
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={s.card}>
        <div className={s.card__overlay} />
        <div className={s.card__wrapper}>
          <div className={s.card__header}>
            {titleChange ? (
              <div>
                <input
                  ref={titleRef}
                  type="text"
                  value={title}
                  onChange={handleOnChangeTitle}
                  onKeyDown={handleOnEnterDown}
                />
              </div>
            ) : (
              <div>
                <h1>
                  {taskState.id}: {taskState.title}
                </h1>
                <button onClick={handleSetTitleChange}>edit</button>
              </div>
            )}
            <button className={s.card__button} onClick={onClose}>
              x
            </button>
          </div>
          <div className={s.card__content}>
            <div className={s.card__body}>
              <div>
                <h2>Описание:</h2>

                {descriptionChange ? (
                  <textarea
                    ref={descriptionRef}
                    onChange={handleOnChangedescription}
                  />
                ) : (
                  <div>
                    <p>
                      {taskState.description
                        ? taskState.description
                        : "Добавьте описание"}
                    </p>
                  </div>
                )}
                <button onClick={handleSetDescriptionChange}>
                  {descriptionChange
                    ? "Сохранить изменения"
                    : "Редактировать описание"}
                </button>
              </div>
              <div>
                <h2>Комментарии:</h2>
                <div>
                  <textarea value={comment} onChange={handleChangeComment} />
                  <button onClick={handleAddComment}>
                    Оставить комментарий
                  </button>
                </div>
                <div className={s.comments__wrapper}>
                  {comments.map((comment, index) => (
                    <div
                      key={`${comment}-${index}`}
                      className={s.comments__item}
                    >
                      {index + 1}:<p>{comment.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              Дата создания:{" "}
              {date &&
                date.toDateString().slice(date.toDateString().indexOf(" "))}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
