# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  email           :string
#  profile_img     :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  description     :text
#  location        :string
#  name            :string
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
