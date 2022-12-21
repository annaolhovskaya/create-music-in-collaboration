import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../../api";
import _ from "lodash";
import ContentWrapper from "../contentWrapper/contentWrapper";
import Commentslist from "../../common/comments/commentsList/commentslist";
import AddCommentForm from "../../common/addCommentForm/addCommentForm";

const Comments = () => {
    const { userId } = useParams();
    const [comments, setComments] = useState();

    useEffect(() => {
        api.comments
            .fetchCommentsForUser(userId)
            .then((data) => setComments(data));
    }, []);

    const sortedComments = _.orderBy(comments, ["created_at"], ["desc"]);

    const handleRemoveComment = (id) => {
        api.comments
            .remove(id)
            .then((id) => setComments(comments.filter((x) => x._id !== id)));
    };

    const handleSubmit = (data) => {
        api.comments
            .add({ ...data, pageId: userId })
            .then((data) => setComments([...comments, data]));
    };
    return (
        <ContentWrapper>
            <div className="card mb-2">
                {" "}
                <div className="card-body ">
                    <AddCommentForm onSubmit={handleSubmit} />
                </div>
            </div>
            {sortedComments.length > 0 && (
                <>
                    <h4 className="form__header">Комментарии</h4>
                    <hr />
                    <Commentslist
                        comments={sortedComments}
                        onRemove={handleRemoveComment}
                    />
                </>
            )}
        </ContentWrapper>
    );
};

export default Comments;
