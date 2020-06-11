/**
 * @name Custom query
 * @description Custom query
 * @id js/config-custom-query
 * @tags comment
 *       TODO
 */

import javascript

from Comment c
where c.getText().regexpMatch("(?si).*\\bTODO\\b.*")
select c
