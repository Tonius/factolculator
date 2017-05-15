export const mapObject = function(object, iteratee) {
    const props = Object.keys(object);
    const result = new Array(props.length);

    props.forEach((key, index) => {
        result[index] = iteratee(object[key], key, object);
    });

    return result;
};
