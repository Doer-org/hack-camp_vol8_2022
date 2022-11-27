const { BaseButton } = require('components/atoms/BaseButton');

const UserRow = ({ participant, key }) => {
  <li className="flex flex-row" key={key}>
    <div className="select-none cursor-pointer flex flex-1 items-center p-4">
      <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
        <img
          alt="profile"
          src={participant.user.picture_url}
          className="mx-auto object-cover rounded-full h-10 w-10 "
        />
      </div>
      <div className="flex-1 pl-1 mr-16">
        <div className="font-medium">{participant.user.display_name}</div>
      </div>
      <BaseButton
        label="完了"
        color="bg-purple-600 hover:bg-purple-700 text-white"
        type="submit"
        // onClick={() => {
        //   completePayment(participant.user.id, participant.status.event_id);
        // }}
      />
    </div>
  </li>;
};
