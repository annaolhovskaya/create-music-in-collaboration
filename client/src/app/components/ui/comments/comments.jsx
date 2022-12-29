import React from "react";
import _ from "lodash";
import ContentWrapper from "../contentWrapper/contentWrapper";
import Commentslist from "../../common/comments/commentsList/commentslist";
import AddCommentForm from "../../common/addCommentForm/addCommentForm";
import { useComments } from "../../../hooks/useComments";

const Comments = () => {
    const { comments, createComment, removeComment } = useComments();

    const sortedComments = _.orderBy(comments, ["created_at"], ["desc"]);

    const handleRemoveComment = (id) => {
        removeComment(id);
    };

    const handleSubmit = (data) => {
        createComment(data);
        // api.comments
        //     .add({ ...data, pageId: userId })
        //     .then((data) => setComments([...comments, data]));
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
                    <h5 className="form__header">Комментарии</h5>
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
