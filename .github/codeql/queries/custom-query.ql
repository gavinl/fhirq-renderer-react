/**
 * @name Custom query
 * @description Custom query
 * @id js/find-all-comments
 * @tags comments
 */

import javascript

from Comment c
//where c.getText().regexpMatch("(?si).*\\bTODO\\b.*")
select c
