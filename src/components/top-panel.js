import React from 'react'
import { FILTER_TASK } from '../constants/types';
import FilterLinkContainers from '../containers/filter-link-containers'
import TaskButton from '../containers/task-button'

export default class TopPanel extends React.Component {
    render() {
        return (
            <div className="panel">
                <ul className="tabs">
                    <li>
                        <FilterLinkContainers filter={FILTER_TASK.ALL}>
                            All
                        </FilterLinkContainers>
                    </li>
                    <li>
                        <FilterLinkContainers filter={FILTER_TASK.NORMAL}>
                            Normal
                        </FilterLinkContainers>
                    </li>
                    <li>
                        <FilterLinkContainers filter={FILTER_TASK.HIGH}>
                            High
                        </FilterLinkContainers>
                    </li>
                    <li>
                        <FilterLinkContainers filter={FILTER_TASK.CRTITCAL}>
                            Critical
                        </FilterLinkContainers>
                    </li>
                </ul>

                <TaskButton className="add-button" isnew={true} />
            </div>
        )
    }
}
