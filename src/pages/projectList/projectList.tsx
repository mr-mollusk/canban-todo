import { useEffect } from "react";
import {
  getProjectsListAction,
  useAppDispatch,
  useAppSelector,
} from "../../store";
import { Link } from "react-router-dom";
import s from "./projectList.module.scss";

export const ProjectList: React.FC = () => {
  const { projectList } = useAppSelector((state) => state.workspace);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProjectsListAction());
  }, []);
  useEffect(() => {
    console.log(projectList);
  }, [projectList]);
  return (
    <div className={s.list__wrapper}>
      {projectList.map((project) => (
        <Link to={`${project.id}`} className={s.list__link} key={project.id}>
          <div className={s.list__item}>
            <h3>{project.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};
